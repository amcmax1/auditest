exports.up = (pgm) => {
    pgm.createTable('git_hooks', {
      id: 'id',
      raw_data: { type: 'varchar(1000)', notNull: true },
      body_data: { type: 'jsonb', notNull: true },
      headers: { type: 'jsonb', notNull: true },
      sender_ip: { type: 'varchar(1000)', notNull: true },
      createdAt: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
      },
    })
  }