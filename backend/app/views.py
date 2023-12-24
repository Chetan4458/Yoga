from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets          
from .serializers import EnrollSerializer
from .models import Enroll                     


class EnrollView(viewsets.ModelViewSet):       
    serializer_class = EnrollSerializer          
    queryset = Enroll.objects.all()       