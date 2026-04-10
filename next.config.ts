import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Allow HMR WebSocket connections from local network devices (e.g. mobile phones on same Wi-Fi)
  allowedDevOrigins: ['192.168.1.15'],
}

export default nextConfig
