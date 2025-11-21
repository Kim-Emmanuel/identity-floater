import React from "react";
import GridBackground from "./components/GridBackground";
import FloatingCard from "./components/FloatingCard";
import { Terminal } from "lucide-react";

const App: React.FC = () => {
	return (
		<div className="relative w-full h-screen overflow-hidden bg-[#0d0d0d] text-white selection:bg-cyan-500/30">
			{/* 1. Ambient Background (Simulates the Desktop Environment) */}
			<GridBackground />

			{/* 2. Floating App Container */}
			<FloatingCard />

			{/* 3. UI Simulation Notes (Bottom Right) */}
			<div className="fixed bottom-8 right-8 z-0 text-right pointer-events-none select-none opacity-30">
				<div className="font-mono text-6xl font-bold text-white/5">V.1.0.4</div>
				<div className="text-sm font-mono text-cyan-500/50 mt-2 mb-2">
					SYSTEM_READY // TAURI_BACKEND_SIMULATION
				</div>
			</div>

			{/* 4. Simulated System Tray (Bottom Bar) */}
			<div className="fixed bottom-0 left-0 right-0 h-10 bg-black/40 backdrop-blur-md border-t border-white/5 flex items-center justify-between px-4 z-40 pointer-events-none">
				<div className="flex items-center gap-4">
					<div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_#00ffff]"></div>
					<span className="font-mono text-xs text-white/40">
						SECURE_CONNECTION
					</span>
				</div>

				{/* The Tray Icon for the App */}
				<div className="flex items-center gap-2 pointer-events-auto">
					<div className="p-1.5 hover:bg-white/10 rounded transition-colors cursor-pointer">
						<Terminal size={14} className="text-white/60" />
					</div>
				</div>
			</div>

			{/* 5. Instructional Overlay (Fade out) */}
			<div className="fixed top-8 left-8 z-0 pointer-events-none">
				<h2 className="font-mono text-white/20 text-sm">
					// DRAG THE CARD
					<br />
					// HOVER TO EXPAND
				</h2>
			</div>
		</div>
	);
};

export default App;
