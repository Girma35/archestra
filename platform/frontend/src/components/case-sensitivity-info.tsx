import { InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function CaseSensitivityInfo() {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        className="rounded-full h-auto w-auto p-1"
                        aria-label="Case sensitivity information"
                    >
                        <InfoIcon className="w-4 h-4 text-muted-foreground" />
                    </Button>
                </TooltipTrigger>
                {/* Added w-fit and min-w-[150px] for a wider appearance */}
                <TooltipContent
                    side="top"
                    sideOffset={4}
                    className="min-w-[160px] text-center"
                >
                    <p className="text-sm font-medium leading-tight">
                        Matching is case-sensitive
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}