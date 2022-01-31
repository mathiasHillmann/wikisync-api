export const LEAGUE_TASK_VARPS = [2616, 2617, 2618, 2619, 2620, 2621, 2622, 2623, 2624, 2625, 2626, 2627, 2628, 2629, 2630, 2631, 2808, 2809, 2810, 2811, 2812, 2813, 2814, 2815, 2816, 2817, 2818, 2819, 2820, 2821, 2822, 2823, 2824, 2825, 2826, 2827, 2828, 2829, 2830, 2831, 2832, 2833, 2834, 2835, 3339, 3340, 3341, 3342];

export class LeagueService {
  public static async getLeagueTasks(data) {
    const results = [];

    LEAGUE_TASK_VARPS.forEach((val, index) => {
      const varp = data.varps[val.toString()];
      for (let i = 0; i < 32; i++) {
        if (varp & (1 << i)) {
          results.push(32 * index + i);
        }
      }
    });
    return results;
  }
}
