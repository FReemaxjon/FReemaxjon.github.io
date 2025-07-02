import * as THREE from 'three';

export function createFireworks() {
  const group = new THREE.Group();

  const particleCount = 300;
  const positions = [];
  const velocities = [];
  const colors = [];

  // Create geometry and attributes
  const geometry = new THREE.BufferGeometry();
  const material = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 1.0,
    depthWrite: false,
  });

  for (let i = 0; i < particleCount; i++) {
    // Initial position at center
    positions.push(0, 0, 0);

    // Velocity: random spherical direction
    const speed = 0.01 + Math.random() * 0.03;
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.random() * Math.PI;
    const vx = speed * Math.sin(phi) * Math.cos(theta);
    const vy = speed * Math.sin(phi) * Math.sin(theta);
    const vz = speed * Math.cos(phi);
    velocities.push(vx, vy, vz);

    // Color
    const color = new THREE.Color();
    color.setHSL(Math.random(), 1.0, 0.6);
    colors.push(color.r, color.g, color.b);
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

  const particles = new THREE.Points(geometry, material);
  group.add(particles);

  // Animate each frame
  let elapsed = 0;
  const maxTime = 200; // adjust
