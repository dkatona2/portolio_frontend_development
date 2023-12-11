export interface SpecificBlogEntry {
  // id: BlogId; // Replace BlogId with the correct type, e.g., string or number
  title: string;
  description: string;
  text: string;
  createdAt: string; // or Date, if you prefer
  editedAt: string; // or Date, if you prefer
  author: string;
  // version: number;
  // comments: SpecificCommentEntry[]; // Define SpecificCommentEntry interface if needed
}
