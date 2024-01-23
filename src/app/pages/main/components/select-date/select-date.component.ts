import { Component } from '@angular/core';
import { DateItemComponent } from '../date-item/date-item.component';
import { CONCEPTS, ConceptInterface } from '../../../../core/interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-select-date',
  standalone: true,
  imports: [DateItemComponent],
  templateUrl: './select-date.component.html',
  styleUrl: './select-date.component.scss',
})
export class SelectDateComponent {
  dateRange: Date[] = [];
  concepts: ConceptInterface[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    const params = activatedRoute.snapshot.queryParams;
    this.concepts = this.loadConcepts(params['concepts']);
    console.log(this.concepts);
    const start = new Date();
    const end = new Date();
    end.setDate(end.getDate() + 15);

    this.dateRange = this.createDateRange(start, end);
  }

  private loadConcepts(conceptsIds: string[]): ConceptInterface[] {
    if (!conceptsIds?.length) {
      this.router.navigate(['/']);
      throw new Error('Concept ids where not provided');
    }

    //TODO replace this logic with an http call an retrieve the concepts from the server
    this.concepts = CONCEPTS.filter((c) => {
      if (typeof conceptsIds === 'string') {
        return c._id === conceptsIds;
      } else {
        return conceptsIds.includes(c._id);
      }
    });

    return this.concepts;
  }

  private createDateRange(start: Date, end: Date) {
    const arr = [];
    for (
      const dt = new Date(start);
      dt < new Date(end);
      dt.setDate(dt.getDate() + 1)
    ) {
      // Avoid weekend days
      if (dt.getDay() != 6 && dt.getDay() != 0) {
        arr.push(new Date(dt));
      }
    }
    return arr;
  }
}
