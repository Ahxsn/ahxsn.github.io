import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, RoundedBox, Text, MeshTransmissionMaterial } from "@react-three/drei";
import type { Group, Mesh } from "three";

/**
 * Hero 3D scene — a calm, modern depiction of the craft:
 * a floating IDE window with animated code, a paired browser preview,
 * a refractive glass orb for depth, and a drifting particle field.
 * Tuned for clarity and prestige over spectacle.
 */

const ACCENT = "#ef4444";
const ACCENT_SOFT = "#fb7185";

function CodeRow({ y, w, color, x = 0 }: { y: number; w: number; color: string; x?: number }) {
  const ref = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.scale.x = 1 + Math.sin(t * 0.6 + y * 4) * 0.015;
  });
  return (
    <RoundedBox
      ref={ref as never}
      args={[w, 0.055, 0.012]}
      radius={0.025}
      position={[-1.25 + w / 2 + x, y, 0.03]}
    >
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} roughness={0.6} />
    </RoundedBox>
  );
}

function Caret() {
  const ref = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.scale.x = Math.sin(clock.getElapsedTime() * 2.4) > 0 ? 1 : 0;
  });
  return (
    <RoundedBox ref={ref as never} args={[0.035, 0.13, 0.014]} radius={0.005} position={[0.55, -0.66, 0.04]}>
      <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1.3} />
    </RoundedBox>
  );
}

function IDEWindow() {
  const group = useRef<Group>(null);
  useFrame(({ pointer, clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = pointer.x * 0.12 + Math.sin(t * 0.35) * 0.04;
    group.current.rotation.x = -pointer.y * 0.08 + Math.sin(t * 0.5) * 0.02;
    group.current.position.y = Math.sin(t * 0.6) * 0.05;
  });

  const rows = useMemo(
    () => [
      { y: 0.78, w: 0.55, c: ACCENT_SOFT, x: 0 },
      { y: 0.78, w: 0.85, c: "#94a3b8", x: 0.7 },
      { y: 0.62, w: 1.25, c: "#cbd5e1", x: 0 },
      { y: 0.46, w: 1.8, c: "#e2e8f0", x: 0 },
      { y: 0.3, w: 1.05, c: ACCENT, x: 0 },
      { y: 0.14, w: 1.55, c: "#cbd5e1", x: 0 },
      { y: -0.02, w: 0.9, c: "#94a3b8", x: 0 },
      { y: -0.18, w: 1.7, c: ACCENT_SOFT, x: 0 },
      { y: -0.34, w: 1.3, c: "#cbd5e1", x: 0 },
      { y: -0.5, w: 0.75, c: "#94a3b8", x: 0 },
      { y: -0.66, w: 0.5, c: "#cbd5e1", x: 0 },
    ],
    [],
  );

  return (
    <group ref={group} position={[-0.4, 0.05, 0]} rotation={[0, 0.08, 0]}>
      <RoundedBox args={[3.1, 2.2, 0.08]} radius={0.08}>
        <meshStandardMaterial color="#0b1220" metalness={0.6} roughness={0.35} />
      </RoundedBox>
      <RoundedBox args={[2.95, 2.05, 0.02]} radius={0.06} position={[0, -0.02, 0.05]}>
        <meshStandardMaterial color="#0f172a" emissive="#1e293b" emissiveIntensity={0.4} roughness={0.4} />
      </RoundedBox>
      <RoundedBox args={[2.95, 0.22, 0.005]} radius={0.04} position={[0, 0.94, 0.06]}>
        <meshStandardMaterial color="#111827" />
      </RoundedBox>
      {[-1.32, -1.18, -1.04].map((x, i) => (
        <mesh key={i} position={[x, 0.94, 0.07]}>
          <circleGeometry args={[0.04, 24]} />
          <meshStandardMaterial
            color={["#ff5f57", "#febc2e", "#28c840"][i]}
            emissive={["#ff5f57", "#febc2e", "#28c840"][i]}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
      <RoundedBox args={[0.95, 0.16, 0.005]} radius={0.03} position={[-0.55, 0.94, 0.065]}>
        <meshStandardMaterial color="#1e293b" />
      </RoundedBox>
      <Text position={[-0.55, 0.94, 0.072]} fontSize={0.085} color="#cbd5e1" anchorX="center" anchorY="middle">
        index.tsx
      </Text>
      <group position={[0, -0.05, 0]}>
        {rows.map((r, i) => (
          <CodeRow key={i} y={r.y} w={r.w} color={r.c} x={r.x} />
        ))}
        <Caret />
      </group>
    </group>
  );
}

function BrowserPreview() {
  return (
    <Float speed={1.1} rotationIntensity={0.18} floatIntensity={0.5}>
      <group position={[2.05, 0.35, -0.2]} rotation={[0, -0.32, 0]}>
        <RoundedBox args={[1.85, 1.35, 0.07]} radius={0.07}>
          <meshStandardMaterial color="#0b1220" metalness={0.5} roughness={0.3} />
        </RoundedBox>
        <RoundedBox args={[1.72, 1.22, 0.02]} radius={0.05} position={[0, -0.02, 0.045]}>
          <meshStandardMaterial color="#f8fafc" />
        </RoundedBox>
        <RoundedBox args={[1.55, 0.09, 0.005]} radius={0.025} position={[0, 0.5, 0.06]}>
          <meshStandardMaterial color="#e2e8f0" />
        </RoundedBox>
        <RoundedBox args={[1.55, 0.42, 0.005]} radius={0.04} position={[0, 0.18, 0.06]}>
          <meshStandardMaterial color="#0f172a" />
        </RoundedBox>
        <RoundedBox args={[0.42, 0.09, 0.005]} radius={0.02} position={[-0.52, 0.22, 0.07]}>
          <meshStandardMaterial color={ACCENT} emissive={ACCENT} emissiveIntensity={0.6} />
        </RoundedBox>
        {[-0.14, -0.27, -0.4, -0.53].map((y, i) => (
          <RoundedBox
            key={i}
            args={[1.45 - i * 0.18, 0.05, 0.005]}
            radius={0.012}
            position={[-0.05, y, 0.06]}
          >
            <meshStandardMaterial color={i === 0 ? "#475569" : "#cbd5e1"} />
          </RoundedBox>
        ))}
      </group>
    </Float>
  );
}

function GlassOrb() {
  return (
    <Float speed={0.8} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh position={[-2.4, 1.1, -1]}>
        <sphereGeometry args={[0.45, 48, 48]} />
        <MeshTransmissionMaterial
          backside
          thickness={0.6}
          roughness={0.15}
          ior={1.3}
          chromaticAberration={0.05}
          color="#ffffff"
          transmission={1}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 60 }: { count?: number }) {
  const group = useRef<Group>(null);
  const data = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 9,
        y: (Math.random() - 0.5) * 5,
        z: -1.5 - Math.random() * 2.5,
        s: 0.012 + Math.random() * 0.022,
        phase: Math.random() * Math.PI * 2,
      })),
    [count],
  );
  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.children.forEach((c, i) => {
      const d = data[i];
      c.position.y = d.y + Math.sin(t * 0.4 + d.phase) * 0.1;
    });
  });
  return (
    <group ref={group}>
      {data.map((d, i) => (
        <mesh key={i} position={[d.x, d.y, d.z]}>
          <sphereGeometry args={[d.s, 8, 8]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.35} />
        </mesh>
      ))}
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0.4, 5.2], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 4]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-4, -1, -2]} intensity={1.1} color={ACCENT} />
      <pointLight position={[3, 3, 2]} intensity={0.5} color="#a5b4fc" />
      <Suspense fallback={null}>
        <Particles />
        <GlassOrb />
        <IDEWindow />
        <BrowserPreview />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
