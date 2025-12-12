'use client';

import { useState, useEffect } from 'react';
import { BranchType, Separator, branchTypes, separators } from '@/lib/types';
import { generateBranchName } from '@/lib/branch-generator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ThemeToggle } from '@/components/theme-toggle';

export default function BranchGenerator() {
  const [branchType, setBranchType] = useState<BranchType>('feature');
  const [description, setDescription] = useState('');
  const [ticketId, setTicketId] = useState('');
  const [separator, setSeparator] = useState<Separator>('-');
  const [generatedBranch, setGeneratedBranch] = useState('feature/');
  const [copied, setCopied] = useState(false);

  // Generate branch name in real-time
  useEffect(() => {
    const branchName = generateBranchName({
      type: branchType,
      description,
      ticketId,
      separator,
    });
    setGeneratedBranch(branchName);
  }, [branchType, description, ticketId, separator]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedBranch);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const selectedBranchType = branchTypes.find(bt => bt.value === branchType);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1"></div>
        <ThemeToggle />
      </div>
      
      <div className="text-center space-y-2 mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-xl mb-2">
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
            Branch Name Generator
          </span>
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Generate standardized Git branch names instantly
        </p>
      </div>

      {/* Form Card */}
      <Card className="border-gray-200/50 dark:border-gray-800/50 shadow-2xl">
        <CardContent className="p-6 space-y-5">
        {/* Branch Type Dropdown */}
        <div className="space-y-2">
          <Label htmlFor="branch-type" className="text-xs font-semibold uppercase tracking-wide">
            Type
          </Label>
          <Select value={branchType} onValueChange={(value) => setBranchType(value as BranchType)}>
            <SelectTrigger id="branch-type" className="w-full">
              <SelectValue placeholder="Select branch type" />
            </SelectTrigger>
            <SelectContent>
              {branchTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label} - {type.description}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Separator Selection */}
        <div className="space-y-2">
          <Label htmlFor="separator" className="text-xs font-semibold uppercase tracking-wide">
            Separator
          </Label>
          <Select value={separator} onValueChange={(value) => setSeparator(value as Separator)}>
            <SelectTrigger id="separator" className="w-full">
              <SelectValue placeholder="Select separator" />
            </SelectTrigger>
            <SelectContent>
              {separators.map((sep) => (
                <SelectItem key={sep.value} value={sep.value}>
                  {sep.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Ticket ID Input */}
        <div className="space-y-2">
          <Label htmlFor="ticket-id" className="text-xs font-semibold uppercase tracking-wide">
            Ticket ID <span className="text-gray-400 dark:text-gray-500 font-normal lowercase">(optional)</span>
          </Label>
          <Input
            id="ticket-id"
            type="text"
            value={ticketId}
            onChange={(e) => setTicketId(e.target.value)}
            placeholder="e.g., JIRA-1234, ZD-5678"
            className="w-full"
          />
        </div>

        {/* Description Input */}
        <div className="space-y-2">
          <Label htmlFor="description" className="text-xs font-semibold uppercase tracking-wide">
            Description
          </Label>
          <Input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g., add user authentication"
            className="w-full"
          />
        </div>

        {/* Generated Branch Name */}
        <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-gray-800">
          <Label className="text-xs font-semibold uppercase tracking-wide">
            Generated
          </Label>
          <div className="flex gap-2">
            <div className="flex-1 px-4 py-3 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg font-mono text-base font-bold text-blue-600 dark:text-blue-400 break-all shadow-sm">
              {generatedBranch}
            </div>
            <Button
              onClick={handleCopy}
              variant="outline"
              size="default"
              className="h-auto"
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="hidden sm:inline ml-2 text-sm">Copied</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="hidden sm:inline ml-2 text-sm">Copy</span>
                </>
              )}
            </Button>
          </div>
        </div>
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="border-gray-200 dark:border-gray-800 mt-4">
        <CardContent className="p-4">
        <h3 className="text-xs font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2 uppercase tracking-wide">
          <span>💡</span>
          Quick Reference
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
          <div className="flex items-center gap-2 p-2 bg-muted rounded-lg border">
            <span className="font-mono font-bold text-blue-600 dark:text-blue-400">feature/</span>
            <span className="text-muted-foreground text-[10px]">New</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-muted rounded-lg border">
            <span className="font-mono font-bold text-red-600 dark:text-red-400">bugfix/</span>
            <span className="text-muted-foreground text-[10px]">Fix</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-muted rounded-lg border">
            <span className="font-mono font-bold text-orange-600 dark:text-orange-400">hotfix/</span>
            <span className="text-muted-foreground text-[10px]">Urgent</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-muted rounded-lg border">
            <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">docs/</span>
            <span className="text-muted-foreground text-[10px]">Docs</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-muted rounded-lg border">
            <span className="font-mono font-bold text-purple-600 dark:text-purple-400">refactor/</span>
            <span className="text-muted-foreground text-[10px]">Refactor</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-muted rounded-lg border">
            <span className="font-mono font-bold text-cyan-600 dark:text-cyan-400">test/</span>
            <span className="text-muted-foreground text-[10px]">Test</span>
          </div>
        </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <footer className="text-center pt-4 pb-2">
        <p className="text-xs text-gray-500 dark:text-gray-500">
          Made with ❤️ following{' '}
          <a
            href="https://www.conventionalcommits.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline font-medium transition-colors"
          >
            Conventional Commits
          </a>
        </p>
      </footer>
    </div>
  );
}
