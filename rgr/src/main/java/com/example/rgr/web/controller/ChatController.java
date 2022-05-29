package com.example.rgr.web.controller;

import com.example.rgr.entity.AttachedFile;
import com.example.rgr.entity.Chat;
import com.example.rgr.entity.Message;
import com.example.rgr.entity.User;
import com.example.rgr.model.ChatDto;
import com.example.rgr.model.MessageDto;
import com.example.rgr.model.UserModel;
import com.example.rgr.repo.AttachedFileRepository;
import com.example.rgr.repo.ChatRepository;
import com.example.rgr.repo.UserRepository;
import com.example.rgr.service.AttachedFileService;
import com.example.rgr.service.ChatService;
import com.example.rgr.service.MessageService;
import com.example.rgr.service.UserService;
import com.example.rgr.web.form.ChatForm;
import com.example.rgr.web.form.UserForm;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping("/ms")
public class ChatController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private AttachedFileRepository attachedFileRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private ChatService chatService;

    @Autowired
    private ChatRepository chatRepository;

    @PostMapping("/chat/{chat_id}") //sending message
    public ResponseEntity<?> sendingMessage(@Valid @RequestBody MessageDto messageDto, @PathVariable Long chat_id ){

        if( chatService.findById(chat_id).isPresent()){
            MessageDto saved = MessageDto.build(messageService.save(messageDto, chat_id));

            //        return ResponseEntity.ok().build(messageDto);
            return ResponseEntity.ok(saved);
        }else{
            System.err.println("Chat not found with this id");
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/user/{nickname}")
    public ResponseEntity<?> findUserByNickName (@PathVariable String nickname){
        return ResponseEntity.ok(userService.findByNickname(nickname));
    }


    @PostMapping("/profile/update")
    public ResponseEntity<?> profileUpdate(@Valid @RequestBody UserForm userForm){
        return ResponseEntity.ok(UserModel.toModel(userService.update(userForm)));
    }


    @GetMapping("/chat/{chat_id}")
    public ResponseEntity<?> findChatMessages (@PathVariable Long chat_id){
        return ResponseEntity.ok(MessageDto.buildList(messageService.findAllByChatId(chat_id)));
    }
    @GetMapping("/chat/{chat_id}/info")
    public ResponseEntity<?> findChatInfo(@PathVariable Long chat_id){
        return ResponseEntity.ok(chatService.findById(chat_id).get());
    }
    @DeleteMapping("/chat/{chat_id}/info")
    ResponseEntity<?> deleteChat (@PathVariable Long chat_id){
        chatService.deleteById(chat_id);
        return ResponseEntity.ok("chat deleted");

    }

    @PutMapping("/chat/{chat_id}/info")
    public ResponseEntity<?> updateChat (@RequestBody ChatForm chatForm){
        return ResponseEntity.ok(ChatDto.build(chatService.update(chatForm)));
    }



    @GetMapping("/{user_id}/chats")
    public ResponseEntity<?> findChats (@PathVariable Long user_id){
        Set<Chat> chats = chatService.findByUserId(user_id);
        return ResponseEntity.ok(ChatDto.buildList(chats));
    }

    @PostMapping("/addFriend/{user_id}")
    public ResponseEntity<?> addFriend(@PathVariable Long user_id, @RequestParam String frName){


        return ResponseEntity.ok(userService.addFriend(user_id, frName));


    }

    @GetMapping("/friends/{user_id}")
    public ResponseEntity<?> findFriends(@PathVariable Long user_id){
        return ResponseEntity.ok(userService.findFriends(user_id));


    }

    @PostMapping("/{user_id}/chat")
    public ResponseEntity<?> createChat (@Valid @RequestBody ChatForm chatForm, @PathVariable Long user_id ){

        User user = userService.findById(user_id);
        chatForm.setIsAdmin(user_id);
        Chat ch=chatService.save(chatForm);
          user.getChats().add(ch);
        userRepository.save(user);


        return ResponseEntity.ok("ok");
    }

//    User user = userService.findById(user_id);
//        chatForm.setIsAdmin(user_id);
//    Chat ch = new Chat();
//        BeanUtils.copyProperties(chatForm, ch);;
//        ch.getUsers().add(user);
//
//        return ResponseEntity.ok(ChatDto.build(chatRepository.save(ch)));

    @PostMapping("/search")
    public ResponseEntity<?> findChat(@Valid @RequestBody ChatForm chatForm){
        List<Chat> chats=chatRepository.findAll();
        for(Chat chat : chats){
            if(Objects.equals(chat.getName(), chatForm.getName())){
                return ResponseEntity.ok(ChatDto.build(chat));
            }
        }
        return ResponseEntity.ok("Нет такого чата");
    }
//    @PostMapping("/join/{chat_id}")


}
