module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: "ec2-34-233-157-189.compute-1.amazonaws.com",
      database: "ddf775dvbvngbu",
      user: "sflnhxztaiqejq",
      password:
        "7e34bb64367cb921dcf0d6cba4e9bfadad2948164d053923658fa6a7609e1438",
      port: 5432,
      ssl: { rejectUnauthorized: false },
    },
    seeds: {
      tableName: "knex_seeds",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  onInsetTrigger: (table) => `
  CREATE TRIGGER ${table}_insert_at
  BEFORE INSERT ON ${table}
  FOR EACH ROW
  EXECUTE PROCEDURE add_count();
`,
  createCountFunction: () => `
  create or replace function add_count()
  returns trigger
  as $body$
  declare 
  count numeric;
  begin
  update department set emp_count = emp_count+1 where id = new.department_id;
  return new;
  end;
  $body$ language plpgsql;
`,
  getEmployeeFunc: () => `create or replace function getEmployee(_id int)
    returns table (employee json)
    as $body$
    begin
    return query
    select json_agg(json_build_object(
      'name',emp.name,
      'email',emp.email,
      'department',emp.department_id
    ))employee 
    from public.employee as emp 
    join public.department as dep on emp.department_id = dep.id
    where dep.id = _id ;
    end;
    $body$ language plpgsql;
    
`,
};
