# Generated by Django 3.2.7 on 2021-09-16 18:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_book_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=5),
        ),
        migrations.AlterField(
            model_name='customer',
            name='email',
            field=models.EmailField(max_length=200, null=True),
        ),
    ]
