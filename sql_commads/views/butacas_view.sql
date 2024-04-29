create view vst_bucatas as
select s.id_seat,
	s."number" as snumber,
	s."row_number",
	s.aviable,
	r.id_room,
	r."name",
	r."number"
	from seats s join rooms r on r.id_room = s.id_room
	where r.status = true and s.status = true;