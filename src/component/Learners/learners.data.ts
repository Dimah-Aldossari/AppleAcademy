import Astute from '../../assets/astute.png'

export interface LearnerApp {
  id: number
  name: string
  category: string
  image: string
}

export const learnersApps: LearnerApp[] = [
{ id: 1, name: "learners.apps.Astute SA", category: "learners.utilities", image: Astute },
{ id: 2, name: "learners.apps.MyColors!", category: "learners.utilities", image: Astute },
{ id: 3, name: "learners.apps.HummingBirdPro", category: "learners.utilities", image: Astute },
{ id: 4, name: "learners.apps.Countdown", category: "learners.utilities", image: Astute },
{ id: 5, name: "learners.apps.Hue Hunter", category: "learners.utilities", image: Astute },
{ id: 6, name: "learners.apps.BestBefore", category: "learners.utilities", image: Astute }
]