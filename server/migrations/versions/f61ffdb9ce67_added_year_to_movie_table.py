"""Added year to movie table

Revision ID: f61ffdb9ce67
Revises: 228c15cf953d
Create Date: 2023-04-17 15:23:34.230660

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f61ffdb9ce67'
down_revision = '228c15cf953d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('movies', schema=None) as batch_op:
        batch_op.add_column(sa.Column('year', sa.String(length=100), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('movies', schema=None) as batch_op:
        batch_op.drop_column('year')

    # ### end Alembic commands ###
