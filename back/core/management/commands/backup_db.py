import os
import datetime
from django.core.management.base import BaseCommand
from django.conf import settings

class Command(BaseCommand):
    help = 'Backup the database'

    def handle(self, *args, **kwargs):
        now = datetime.datetime.now()
        date_string = now.strftime('%Y%m%d_%H%M%S')
        backup_dir = os.path.join(settings.BASE_DIR, 'backups')
        os.makedirs(backup_dir, exist_ok=True)
        
        backup_file = os.path.join(backup_dir, f'db_backup_{date_string}.sql')
        
        db = settings.DATABASES['default']
        db_name = db['NAME']

        if db['ENGINE'] == 'django.db.backends.sqlite3':
            command = f'sqlite3 {db_name} .dump > {backup_file}'
            os.system(command)
            self.stdout.write(self.style.SUCCESS(f'Successfully backed up database to {backup_file}'))
        else:
            self.stdout.write(self.style.ERROR('Unsupported database engine'))