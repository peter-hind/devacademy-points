export interface CommentData {
  comment_id: number
  comment_content: string
  student_id: number
  teacher_id: number
  points: number
}

export interface Comment {
  comment_id: number
  comment_content: string
  student_name: string
  teacher_name: string
  points: number
}
