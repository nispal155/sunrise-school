export type EventCategory = "holiday" | "exam" | "event" | "meeting" | "sports" | "academic";

export interface AcademicEvent {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  type: EventCategory;
  description?: string;
  location?: string;
}

export interface CategoryInfo {
  color: string;
  bgColor: string;
  label: string;
}

export const getCategoryInfo = (type: EventCategory): CategoryInfo => {
  switch (type) {
    case "exam":
      return { color: "bg-red-500", bgColor: "bg-red-50", label: "Examination" };
    case "holiday":
      return { color: "bg-emerald-500", bgColor: "bg-emerald-50", label: "Holiday" };
    case "academic":
      return { color: "bg-blue-500", bgColor: "bg-blue-50", label: "Academic" };
    case "event":
      return { color: "bg-accent", bgColor: "bg-accent/10", label: "Event" };
    case "sports":
      return { color: "bg-orange-500", bgColor: "bg-orange-50", label: "Sports" };
    case "meeting":
      return { color: "bg-violet-500", bgColor: "bg-violet-50", label: "Meeting" };
    default:
      return { color: "bg-gray-500", bgColor: "bg-gray-50", label: "Other" };
  }
};

// 2026-2027 Academic Year Events for Sunrise English Boarding School
export const academicEvents: AcademicEvent[] = [
  {
    id: "evt-001",
    title: "New Academic Session Starts",
    date: "2026-04-14",
    type: "academic",
    description: "Welcome to the new academic year 2083 BS / 2026-2027.",
    location: "School Campus",
  },
  {
    id: "evt-002",
    title: "Nepali New Year",
    date: "2026-04-14",
    type: "holiday",
    description: "Public holiday on the occasion of Nepali New Year 2083.",
  },
  {
    id: "evt-003",
    title: "Buddha Jayanti",
    date: "2026-05-12",
    type: "holiday",
    description: "Public holiday for Buddha Jayanti.",
  },
  {
    id: "evt-004",
    title: "First Parent-Teacher Meeting",
    date: "2026-05-25",
    type: "meeting",
    description: "Initial interaction between parents and class teachers.",
    location: "Respective Classrooms",
  },
  {
    id: "evt-005",
    title: "World Environment Day",
    date: "2026-06-05",
    type: "event",
    description: "Tree plantation and awareness programs.",
    location: "School Ground",
  },
  {
    id: "evt-006",
    title: "First Unit Test",
    date: "2026-06-15",
    endDate: "2026-06-20",
    type: "exam",
    description: "First unit assessment for all classes.",
  },
  {
    id: "evt-007",
    title: "Inter-House Quiz Competition",
    date: "2026-07-10",
    type: "event",
    description: "Annual quiz competition between all four houses.",
    location: "School Auditorium",
  },
  {
    id: "evt-008",
    title: "First Terminal Examination",
    date: "2026-08-20",
    endDate: "2026-08-28",
    type: "exam",
    description: "First term examinations for classes 1-10.",
  },
  {
    id: "evt-009",
    title: "Teacher Training Day",
    date: "2026-09-05",
    type: "meeting",
    description: "Professional development day for staff. No classes for students.",
    location: "Meeting Hall",
  },
  {
    id: "evt-010",
    title: "Dashain Vacation",
    date: "2026-10-01",
    endDate: "2026-10-15",
    type: "holiday",
    description: "School closed for the Dashain festival.",
  },
  {
    id: "evt-011",
    title: "Tihar & Chhath Vacation",
    date: "2026-10-28",
    endDate: "2026-11-01",
    type: "holiday",
    description: "School closed for Tihar and Chhath festivals.",
  },
  {
    id: "evt-012",
    title: "Second Unit Test",
    date: "2026-11-15",
    endDate: "2026-11-20",
    type: "exam",
    description: "Second unit assessment for all classes.",
  },
  {
    id: "evt-013",
    title: "Sports Week",
    date: "2026-11-25",
    endDate: "2026-11-30",
    type: "sports",
    description: "Annual sports week featuring track and field, football, and indoor games.",
    location: "School Ground",
  },
  {
    id: "evt-014",
    title: "School Foundation Day",
    date: "2026-12-15",
    type: "event",
    description: "Celebrating the anniversary of Sunrise English Boarding School's establishment.",
    location: "School Premises",
  },
  {
    id: "evt-015",
    title: "Second Terminal Examination",
    date: "2027-01-15",
    endDate: "2027-01-23",
    type: "exam",
    description: "Second term examinations for classes 1-10.",
  },
  {
    id: "evt-016",
    title: "Science & Art Exhibition",
    date: "2027-02-10",
    type: "academic",
    description: "Students showcase their science projects and artwork.",
    location: "School Hall",
  },
  {
    id: "evt-017",
    title: "Annual Day / Prize Distribution",
    date: "2027-02-25",
    type: "event",
    description: "Cultural program and distribution of awards for academic and extracurricular excellence.",
    location: "School Ground",
  },
  {
    id: "evt-018",
    title: "Pre-Board Examination",
    date: "2027-03-05",
    endDate: "2027-03-12",
    type: "exam",
    description: "Final preparatory exams for Class 10.",
  },
  {
    id: "evt-019",
    title: "Result Publication",
    date: "2027-03-25",
    type: "academic",
    description: "Final results publication and mark-sheet distribution.",
    location: "School Campus",
  },
  {
    id: "evt-020",
    title: "Final Examination",
    date: "2027-04-01",
    endDate: "2027-04-10",
    type: "exam",
    description: "Final term examinations for the academic year.",
  },
  {
    id: "evt-021",
    title: "International Literacy Day",
    date: "2026-09-08",
    type: "academic",
    description: "Special assembly and essay writing competition to celebrate literacy.",
    location: "School Hall",
  }
];
