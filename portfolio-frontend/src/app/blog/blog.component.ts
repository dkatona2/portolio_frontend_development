import { Component, OnInit } from '@angular/core';
import { BlogService } from "../blog.service";
import { SpecificBlogEntry } from "../models/specific-blog-entry.model";
import { BlogListEntry } from "../models/blog-list-entry.model";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: SpecificBlogEntry[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getAllBlogs().subscribe(
      (data: BlogListEntry) => {
        this.blogs = data.blogs;
      },
      error => {
        console.error('Error fetching blogs:', error);
      }
    );
  }
}
