from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Question, Answer
from .modelsdto import QuestionSerializer, QuestionDetailSerializer, AnswerSerializer


@api_view(['GET'])
def QuestionList(request):
    questions = Question.objects.all()
    serializer = QuestionSerializer(questions, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['POST'])
def QuestionCreate(request):
    request.data['Question']['isqn'] = request.data['isqn']
    request.data['Question']['title'] = request.data['title']
    request.data['Question']['content'] = request.data['content']
    # date ? 
    request.data['Question']['date'] = request.data['date']
    serializer = request.data['Question']
    serializer = QuestionDetailSerializer(data=serializer)
    if serializer.is_valid():
        serializer.save()
    print("save") #
    return Response(serializer.data)


@api_view(['GET'])
def QuestionDetail(request, pk):
    questions = Question.objects.all().filter(isqn=pk)
    answers = Answer.objects.all().filter(isan=pk)
    serializer = QuestionDetailSerializer(questions, answers, many=True)
    return Response(serializer.data)


@api_view(['PUT'])
def QuestionUpdate(request, pk):
    question = Question.objects.get(isqn=pk)
    serializer = QuestionDetailSerializer(instance=question, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def QuestionDelete(request, pk):
    question = Question.objects.get(isqn=pk)
    question.delete()
    return Response('Deleted')


# 댓글

@api_view(['GET'])
def AnswerList(request):
    answers = Answer.objects.all()
    serializer = AnswerSerializer(answers, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['POST'])
def AnswerCreate(request):
    request.data['Answer']['isan'] = request.data['isan']
    request.data['Answer']['question'] = request.data['question']
    request.data['Answer']['content'] = request.data['content']
    # date ? 
    request.data['Answer']['date'] = request.data['date']
    serializer = request.data['Answer']
    serializer = AnswerSerializer(data=serializer)
    if serializer.is_valid():
        serializer.save()
    print("save") #
    return Response(serializer.data)


@api_view(['GET'])
def AnswerDetail(request, pk):
    answers = Answer.objects.all().filter(isan=pk)
    serializer = AnswerSerializer(answers, many=True)
    return Response(serializer.data)


@api_view(['PUT'])
def AnswerUpdate(request, pk):
    answer = Answer.objects.get(isan=pk)
    serializer = AnswerSerializer(instance=answer, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def AnswerDelete(request, pk):
    answer = Question.objects.get(isan=pk)
    answer.delete()
    return Response('Deleted')


