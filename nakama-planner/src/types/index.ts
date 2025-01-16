export interface CrewMember {
    id: number;
    name: string;
    skills: string[];
  }
  
  export interface TeamMatchingState {
    skills: string;
    goals: string;
    suggestedCrew: CrewMember[];
  }