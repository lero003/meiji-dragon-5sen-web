export class Coin3D {
    private element: HTMLElement;
    private bounds: DOMRect;

    constructor(selector: string) {
        const el = document.querySelector(selector);
        if (!el) throw new Error(`Element ${selector} not found`);
        this.element = el as HTMLElement;
        this.bounds = this.element.getBoundingClientRect();

        this.init();
    }

    private init() {
        window.addEventListener('resize', () => {
            this.bounds = this.element.getBoundingClientRect();
        });

        document.addEventListener('mousemove', (e) => {
            this.update(e.clientX, e.clientY);
        });
    }

    private update(mouseX: number, mouseY: number) {
        const centerX = this.bounds.left + this.bounds.width / 2;
        const centerY = this.bounds.top + this.bounds.height / 2;

        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;

        // Calculate rotation
        const rotateY = (deltaX / window.innerWidth) * 40; // Max 20deg
        const rotateX = -(deltaY / window.innerHeight) * 40; // Max 20deg

        // Calculate shine/glare position
        const shineX = 50 + (deltaX / window.innerWidth) * 100;
        const shineY = 50 + (deltaY / window.innerHeight) * 100;

        this.element.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.05, 1.05, 1.05)
    `;

        // Update CSS variables for lighting
        this.element.style.setProperty('--shine-x', `${shineX}%`);
        this.element.style.setProperty('--shine-y', `${shineY}%`);
    }
}
