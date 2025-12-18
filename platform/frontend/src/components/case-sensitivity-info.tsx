import { InfoIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function CaseSensitivityInfo() {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-full transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        aria-label="Case sensitivity information"
                    >
                        <InfoIcon className="w-4 h-4 text-muted-foreground" />
                    </button>
                </TooltipTrigger>
                {/* Added w-fit and min-w-[150px] for a wider appearance */}
                <TooltipContent
                    side="top"
                    className="bg-white text-black border border-slate-200 px-4 py-2 shadow-xl min-w-[160px] text-center"
                >
                    <p className="text-sm font-medium leading-tight">
                        Matching is case-sensitive
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}