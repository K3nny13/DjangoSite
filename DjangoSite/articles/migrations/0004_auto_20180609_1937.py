# Generated by Django 2.0.3 on 2018-06-09 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0003_article_thumb'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='thumb',
            field=models.ImageField(blank=True, default='default.jpg', upload_to=''),
        ),
    ]
