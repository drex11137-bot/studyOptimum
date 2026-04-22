export interface Flashcard {
  id: string;
  front: string;
  back: string;
  ease_factor: number;
  interval: number;
  repetitions: number;
  due_date: number;
}

/**
 * SuperMemo-2 (SM-2) inspired spaced repetition algorithm.
 * Quality (q): 0-5
 * 5: perfect response
 * 4: correct response after a hesitation
 * 3: correct response recalled with serious difficulty
 * 2: incorrect response; where the correct one seemed easy to recall
 * 1: incorrect response; the correct one remembered
 * 0: complete blackout
 */
export function calculateNextReview(card: Flashcard, quality: number): Flashcard {
  let { ease_factor, interval, repetitions } = card;

  if (quality >= 3) {
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * ease_factor);
    }
    repetitions += 1;
  } else {
    repetitions = 0;
    interval = 1;
  }

  ease_factor = ease_factor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (ease_factor < 1.3) ease_factor = 1.3;

  const due_date = Date.now() + (interval * 24 * 60 * 60 * 1000); // interval in days converted to ms

  return {
    ...card,
    ease_factor,
    interval,
    repetitions,
    due_date
  };
}
