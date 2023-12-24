'''Here we specify the model to work with and the fields we want to be converted to JSON.'''

from rest_framework import serializers
from .models import Enroll


class EnrollSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enroll
        fields = ('id', 'name', 'age','batch','paid')