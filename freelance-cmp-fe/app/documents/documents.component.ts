import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Docuent Dashboard"
  
  documents: Document[] = [
    {
      title: "My First Doc",
      description: 'asdfasdfasdf asdfasd',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://cdn5.kicksonfire.com/wp-content/uploads/2017/01/Air-Jordan-13-4-2-565x372.png?x76107',
    },
    {
      title: "My Second Doc",
      description: 'asdfasdfasdf asdfasd',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://cdn5.kicksonfire.com/wp-content/uploads/2017/01/Air-Jordan-13-4-2-565x372.png?x76107',
    },
    {
      title: "My Last Doc",
      description: 'asdfasdfasdf asdfasd',
      file_url: 'http://google.com',
      updated_at: '11/11/16',
      image_url: 'https://cdn5.kicksonfire.com/wp-content/uploads/2017/01/Air-Jordan-13-4-2-565x372.png?x76107',
    }
  ]
}