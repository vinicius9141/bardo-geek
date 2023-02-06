import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss'],
})
export class CreatorComponent implements OnInit {
  public postRegister!: FormGroup;
  public fullDate: any;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    this.fullDate = day + '/' + month + '/' + year;

    this.postRegister = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      post: ['', Validators.compose([Validators.required])],
      categoryPost: ['', Validators.compose([Validators.required])],
      date: [this.fullDate],
    });
  }

  public sendPost(): void {
    this.postService.savePost(this.postRegister.value);
  }
}
