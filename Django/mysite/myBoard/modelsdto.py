from rest_framework import serializers
from .models import Answer, Question


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['isqn', 'title', 'date']

# 댓글

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['isan', 'question', 'content', 'date']


class QuestionDetailSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True, read_only=True)
    class Meta:
        model = Question
        fields = ['isqn', 'title', 'content', 'date', 'answers']

