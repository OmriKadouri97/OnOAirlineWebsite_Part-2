import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
})
export class HelpComponent {
  searchQuery = ''; // Type inference is sufficient
  faqSections = [
    {
      title: 'How to search for flights?',
      content: 'Use the “Find a Flight” or “Last Minute Flights” section on the home page or the “Search for Flights” page on the navigation bar in the header go to "User" -> "Search a Flight" to search for flights by origin, destination, and departure date.',
    },
    {
      title: 'How to manage bookings?',
      content: 'Navigate to the “My Bookings” page to view all your past and upcoming bookings. Select a booking for more details.',
    },
    {
      title: 'How to contact support?',
      content: 'Click on the support icon at the bottom of any page to contact us via email or phone.',
    },
  ];

  get filteredFaqSections() {
    const query = this.searchQuery.trim().toLowerCase();
    return query
      ? this.faqSections.filter(({ title }) => title.toLowerCase().includes(query))
      : this.faqSections;
  }
}
