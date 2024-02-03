const Review = require("../models/Review.model");

/**
 * Get all the metric values for a company.
 *
 * @param {string} companyId ID of company to get metrics for.
 * @returns Object of metrics mapped to array of values for that metric
 * retrieved from all reviews for that company. null if retrieving reviews
 * failed (database error).
 */
async function getMetricsByCompanyId(companyId) {
  let reviews;
  try {
    reviews = await Review.find({ companyId });
  } catch (error) {
    console.error(error);
    return null;
  }

  const scores = reviews.map(review => review.score);
  const nonNullish = (value) => value != null;
  return {
    metricA: scores?.map(score => score?.metricA).filter(nonNullish) ?? [],
    metricB: scores?.map(score => score?.metricB).filter(nonNullish) ?? [],
    metricC: scores?.map(score => score?.metricC).filter(nonNullish) ?? [],
    metricD: scores?.map(score => score?.metricD).filter(nonNullish) ?? [],
    metricE: scores?.map(score => score?.metricE).filter(nonNullish) ?? [],
  };
}

module.exports = { getMetricsByCompanyId };
