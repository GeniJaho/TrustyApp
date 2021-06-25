<?php

use Phoenix\Database\Element\Index;
use Phoenix\Migration\AbstractMigration;

class CreateUsersTable extends AbstractMigration
{
    protected function up(): void
    {
        $this->table('users')
            ->addColumn('username', 'string')
            ->addColumn('full_name', 'string')
            ->addColumn('password', 'string')
            ->addIndex('username', Index::TYPE_UNIQUE)
            ->create();
    }

    protected function down(): void
    {
        $this->table('users')->drop();
    }
}
