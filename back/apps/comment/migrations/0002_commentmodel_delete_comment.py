# Generated by Django 5.0.6 on 2024-06-29 05:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comment', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CommentModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=255)),
                ('correo', models.CharField(max_length=255)),
                ('telefono', models.CharField(max_length=20)),
                ('pais', models.CharField(max_length=100)),
                ('comentario', models.TextField()),
            ],
        ),
        migrations.DeleteModel(
            name='Comment',
        ),
    ]
