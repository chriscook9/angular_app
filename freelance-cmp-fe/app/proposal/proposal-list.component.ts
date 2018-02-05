import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'Xcite Comm', 'http://portfolio,chriscook.com', 'Ruby on Rails', 150, 120, 15, 'sadf@test.com')
  proposalTwo: Proposal = new Proposal(90, 'Seven Comm', 'http://portfolio,chriscook.com', 'Ruby on Rails', 150, 120, 15, 'sadf@test.com')
  proposalThree: Proposal = new Proposal(60, 'New Star Comm.', 'http://portfolio,chriscook.com', 'Ruby on Rails', 150, 120, 15, 'sadf@test.com')
  

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}