# Generated by Django 3.1.3 on 2021-08-01 11:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myBoard', '0002_auto_20210801_1003'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='createDate',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]
