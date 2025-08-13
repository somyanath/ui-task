import React, { useState, useEffect } from "react";
import type { ContentData } from "../types";
import { Button } from "./ui/Button";
import { RightArrowWhite } from "./icons/RightArrowWhite";

interface PromotionBannerProps {
  promotion: ContentData["promotion"];
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isActive: boolean;
}

export const PromotionBanner: React.FC<PromotionBannerProps> = ({
  promotion,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isActive: false,
  });

  useEffect(() => {
    // Calculate time left based on promotion end date
    const calculateTimeLeft = () => {
      const now = new Date();
      const startDate = new Date(promotion.startDate);
      const endDate = new Date(promotion.endDate);

      // Check if promotion is active
      if (now < startDate || now > endDate) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isActive: false,
        };
      }

      // Calculate time left
      const totalSeconds = Math.floor(
        (endDate.getTime() - now.getTime()) / 1000
      );

      if (totalSeconds <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isActive: false,
        };
      }

      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = Math.floor(totalSeconds % 60);

      return {
        days,
        hours,
        minutes,
        seconds,
        isActive: true,
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [promotion.startDate, promotion.endDate]);

  return (
    <section className="py-12 lg:py-20">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-center text-white">
        <h2 className="text-3xl lg:text-6xl font-bold mb-4 lg:mb-6">
          {promotion.title}
        </h2>
        <p className="text-lg lg:text-4xl font-normal mb-6 lg:mb-8 opacity-90">
          {promotion.subtitle}
        </p>

        {/* Countdown Timer */}
        <div className="mb-8 lg:mb-12">
          {timeLeft.isActive ? (
            <p className="text-2xl lg:text-6xl font-normal mb-4 leading-tight text-wrap">
              {promotion.urgencyText}{" "}
              {timeLeft.days > 0 && `${timeLeft.days}d `}
              {timeLeft.hours}hrs {timeLeft.minutes}mins {timeLeft.seconds}
              seconds
            </p>
          ) : (
            <p className="text-2xl lg:text-7xl font-normal mb-4 leading-tight">
              {promotion.endDate < new Date().toISOString()
                ? "This offer has ended"
                : "This offer hasn't started yet"}
            </p>
          )}
        </div>

        <Button
          variant="secondary"
          size="lg"
          className="rounded-full px-8 py-4 text-lg font-medium flex items-center gap-3 mx-auto bg-white text-black hover:bg-gray-100"
          onClick={() => (window.location.href = promotion.ctaLink)}
          disabled={!timeLeft.isActive}
        >
          {promotion.ctaText}
          <RightArrowWhite width={24} height={24} color="black" />
        </Button>
      </div>
    </section>
  );
};
