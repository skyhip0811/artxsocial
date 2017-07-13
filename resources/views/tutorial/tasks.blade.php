<!DOCTYPE html>
<html>
    <head>
        <title>task template</title>
    </head>
    <body>
        @foreach($tasks as $task)
        <li>{{$task->body}}</li>
        @endforeach
    </body>
</html>