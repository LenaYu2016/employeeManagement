<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\Http\Requests;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{
    public function addUser(Request $request)
    {

           $user = new User();
           $user->Name = $request->input('name');
           $user->Password = $request->input('password');
           $user->Position = $request->input('position');
           $user->Gender = $request->input('gender');
           $user->Department = $request->input('department');
           $user->Email = $request->input('email');
           $user->Role = $request->input('role');
           $user->save();
           return response()->json(['message' => 'succeed']);

    }
    public function getAll(){
        $emps=User::all();
        return response()->json($emps);
    }
   public function getById($id){
       $emp=User::find($id);
       return response()->json($emp);
   }
    public function updateName(Request $request){
        $emp=User::find($request->input('id'));
        $emp->Name=$request->input('name');
       $emp->save();
        return response()->json(['message' => 'succeed']);
    }
    public  function updatePosition(Request $request){
        $emp=User::find($request->input('id'));
        $emp->Position=$request->input('position');
        $emp->save();
        return response()->json(['message' => 'succeed']);
    }
    public  function updateDepartment(Request $request){
        $emp=User::find($request->input('id'));
        $emp->Department=$request->input('department');
        $emp->save();
        return response()->json(['message' => 'succeed']);
    }
    public function updateRole(Request $request){
        $emp=User::find($request->input('id'));
        $emp->Role=$request->input('role');
        $emp->save();
        return response()->json(['message' => 'succeed']);
    }
    public function deleteById($id){
        $emp=User::find($id);
        $emp->delete();

        return response()->json(['message' => 'succeed']);
    }
    public function Send(Request $request){
      $emp= User::find($request->input('id'));
        $empmessage=$request->input('message');
        $subject=$request->input('subject');
        $info=['emp'=>$emp,'subject'=>$subject];
        Mail::send('email.send',['emp'=>$emp,'empmessage'=>$empmessage],function($message) use($info){
$message->to($info['emp']->Email,$info['emp']->Name)->from('475099436yu@gmail.com')->subject($info['subject']);
        });
        return response()->json(['message' => 'succeed','emp'=>$emp]);
    }
    public function sendAll(Request $request){
        $emps= User::all();
        $empmessage = $request->input('message');
        $subject = $request->input('subject');
        foreach($emps as $emp) {

            $info = ['emp' => $emp, 'subject' => $subject];
            Mail::send('email.send', ['emp' => $emp, 'empmessage' => $empmessage], function ($message) use ($info) {
                $message->to($info['emp']->Email, $info['emp']->Name)->from('475099436yu@gmail.com')->subject($info['subject']);
            });
        }
        return response()->json(['message' => 'succeed']);
    }
}
