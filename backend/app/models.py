from django.db import models

# Create your models here.
class Enroll(models.Model):
    name = models.CharField(max_length=120)
    age = models.IntegerField()
    batch = models.CharField(max_length=120)
    paid = models.BooleanField(default=False)

    def _str_(self):
        return self.title