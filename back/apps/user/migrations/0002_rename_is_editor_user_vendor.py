# Generated by Django 5.0.6 on 2024-06-20 05:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='is_editor',
            new_name='vendor',
        ),
    ]
