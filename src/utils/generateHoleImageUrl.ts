export function generateHoleImageUrl(
  eventId: string,
  layoutId: string,
  holeNumber: number
) {
  //https://assets.pdga.com/78193/hole-maps/669704/hole1.jpg

  return `https://assets.pdga.com/${eventId}/hole-maps/${layoutId}/hole${holeNumber}.jpg`;
}
