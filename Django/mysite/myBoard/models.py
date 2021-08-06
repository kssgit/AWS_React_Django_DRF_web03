from django.db import models

# Create your models here.
class Question(models.Model):
    isqn = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    content = models.TextField()
    date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.subject


class Answer(models.Model):
    isan = models.AutoField(primary_key=True)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    content = models.TextField()
    date = models.DateTimeField(auto_now=True)