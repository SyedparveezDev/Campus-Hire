"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { motion } from "framer-motion"

export default function GigFilters() {
  const categories = [
    "Web Development",
    "Design & Creative",
    "Writing & Translation",
    "Marketing",
    "Data & Analytics",
    "Video & Animation",
  ]

  const skills = ["JavaScript", "React", "Python", "Photoshop", "Content Writing", "Data Analysis"]

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-medium mb-3">Budget Range</h3>
            <div className="space-y-4">
              <Slider defaultValue={[50, 500]} min={0} max={1000} step={10} />
              <div className="flex justify-between text-sm">
                <span>$50</span>
                <span>$500</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox id={`category-${index}`} />
                  <Label htmlFor={`category-${index}`} className="text-sm font-normal">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Skills</h3>
            <div className="space-y-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox id={`skill-${index}`} />
                  <Label htmlFor={`skill-${index}`} className="text-sm font-normal">
                    {skill}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
