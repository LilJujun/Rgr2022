package com.example.rgr.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "attached_files")
public class AttachedFile {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;

    @Column(nullable = false)
    private String path;

    @OneToOne(mappedBy = "attachedFile",cascade = CascadeType.ALL)
    private Message message;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "attachedFiles")
    private Chat chat;




}
