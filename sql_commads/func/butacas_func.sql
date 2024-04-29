create or replace function get_bucatas(
	in _id_billboard int,
	in _id_room int,
	out id_room int,
	out aviable int,
	out counts bigint
)returns setof record language plpgsql as $$
declare reg RECORD;
begin
	for reg in
		select	vst.id_room,
			vst.aviable,
			count(vst.id_seat) as counts
		from vst_bucatas vst
			join bilboards b on b.id_room = vst.id_room 
		where b.status = true and b."date" = current_date and b.id_bilboard = _id_billboard and b.id_room = _id_room
		group by vst.id_room, vst.aviable
	loop
    id_room := reg.id_room;
    aviable := reg.aviable;
    counts := reg.counts;
	return next;
	end loop;
	return;
end; $$;