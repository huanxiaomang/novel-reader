export default function animation(callback: (progress: number) => void, finish: () => void, duration: number = 100) {
    let startTime: number | null = null;

    function animateFrame(currentTime: number) {
        if (!startTime) {
            startTime = currentTime;
        }

        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        // Execute callback with current progress
        callback(progress);

        if (progress < 1) {
            // Continue the animation
            requestAnimationFrame(animateFrame);
        } else {
            // Animation completed
            startTime = null;
            finish();
        }
    }

    requestAnimationFrame(animateFrame);
}