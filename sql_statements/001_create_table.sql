create table public.test (
    id bigint generated always as identity primary key, --priamary key
    user_name text not null unique, --could be foreign key
    first_name text not null,
    last_name text not null,
    course text,
    elevator_pitch text,
    personal_introduction text,
    upcoming_actions text
);