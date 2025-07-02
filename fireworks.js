import * as THREE from 'three';

export function createFireworks() {
  const group = new THREE.Group();

  const particleCount = 200;
  const geometry = new THREE.BufferGeometry();
  const positions = [];
  const colors = [];

  for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 2;
    const y = (Math.random() - 0.5) * 2;
    const z = (Math.random() - 0.5) * 2;
    positions.push(x, y, z);

    const color = new THREE.Color();
    color.setHSL(Math.random(), 1.0, 0.6);
    colors.push(color.r, color.g, color.b);
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.9
  });

  const particles = new THREE.Points(geometry, material);
  group.add(particles);

  return group;
}
