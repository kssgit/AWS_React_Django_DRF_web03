from django.urls import path
from . import api

urlpatterns = [
    path('', api.QuestionList, name="QuestionList"),
    path('create/', api.QuestionCreate, name="QuestionCreate"),
    path('detail/<str:pk>/', api.QuestionDetail, name="QuestionDetail"),
    path('update/<str:pk>/', api.QuestionUpdate, name='QuestionUpdate'),
    path('delete/<str:pk>/', api.QuestionDelete, name="QuestionDelete"),

    # 댓글
    path('create/answer/', api.QuestionCreate, name="QuestionCreate"),

]
