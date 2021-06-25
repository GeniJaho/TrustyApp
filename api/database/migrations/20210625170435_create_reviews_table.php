<?php

use Phoenix\Migration\AbstractMigration;

class CreateReviewsTable extends AbstractMigration
{
    protected function up(): void
    {
        $this->table('reviews')
            ->addColumn('body', 'string')
            ->addColumn('rating', 'integer')
            ->addColumn('from_id', 'integer')
            ->addColumn('to_id', 'integer')
            ->addColumn('created_at', 'timestamp')
            ->addForeignKey('from_id', 'users', 'id')
            ->addForeignKey('to_id', 'craftsmen', 'id')
            ->create();
    }

    protected function down(): void
    {
        $this->table('reviews')->drop();
    }
}
