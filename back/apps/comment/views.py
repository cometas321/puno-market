from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .serlializers import CommentSerializer 
from .models import CommentModel
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.
class CreateComment(APIView):
    def post(self, request):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class ListAllComments(APIView):
    def get(self, request):
        comments = CommentModel.objects.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)


class EditComment(APIView):
    def put(self, request, pk):
        try:
            comment = CommentModel.objects.get(pk=pk)
        except CommentModel.DoesNotExist:
            return Response({"error": "Comment not found."}, status=status.HTTP_404_NOT_FOUND)

        serializer = CommentSerializer(comment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DeleteComment(APIView):
    def delete(self, request, pk):
        try:
            comment = CommentModel.objects.get(pk=pk)
            comment.delete()
            return Response("Comment deleted successfully.", status=status.HTTP_204_NO_CONTENT)
        except CommentModel.DoesNotExist:
            return Response({"error": "Comment not found."}, status=status.HTTP_404_NOT_FOUND)