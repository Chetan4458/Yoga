from django.contrib import admin
from .models import Enroll
# Register your models here.
class EnrollAdmin(admin.ModelAdmin):
    list_display=("name","age","batch","paid")

admin.site.register(Enroll,EnrollAdmin)